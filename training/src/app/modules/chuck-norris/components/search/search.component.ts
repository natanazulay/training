import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { debounceTime, Subject, takeUntil, tap } from "rxjs";

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {

	public searchForm: FormGroup;
	private searchKeyIsValid: boolean;
	private componentDestroyed$: Subject<void>                        = new Subject();
	@Output() private generateJokesOnClickMode: EventEmitter<string>  = new EventEmitter<string>();
	@Output() private generateJokesOnSearchMode: EventEmitter<string> = new EventEmitter<string>();
	@Output() private isSearchValid: EventEmitter<boolean>            = new EventEmitter<boolean>();

	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {
		this.searchForm = this.fb.group({
			searchKey: [
				'', [
					Validators.required,
					Validators.minLength(3),
					Validators.maxLength(120)
				]
			],
		});
		this.getJokesWhenSearchKeyChange();
	}

	get searchKeyFormControl(): AbstractControl {
		return this.searchForm.get('searchKey');
	}

	public getJokesWhenSearchKeyChange(): void {
		this.searchKeyFormControl?.valueChanges.pipe(
			tap((searchValue: string) => {
				this.searchKeyIsValid = this.searchKeyFormControl?.valid
				this.SearchKeyValidation(searchValue)
				}
			),
			debounceTime(1000),
			takeUntil(this.componentDestroyed$)
		).subscribe((searchValue: string) => {
			if (this.searchKeyIsValid) {
				this.setItems(searchValue);
			}
		});
	}

	public SearchKeyValidation(searchValue:string): void {
		if (this.searchKeyIsValid) {
			this.isSearchValid.emit(false);
			this.generateJokesOnClickMode.emit(searchValue);
		} else {
			this.isSearchValid.emit(true);
		}

	}

	public setItems(searchKey: string): void {
		this.generateJokesOnSearchMode.emit(searchKey);
	}

	public getErrorMessage() {
		return this.searchKeyFormControl?.hasError('required') ? 'Search is required' :
			this.searchKeyFormControl?.hasError('minlength') ? 'Enter at least 3 characters long' :
				this.searchKeyFormControl?.hasError('maxlength') ? 'Enter at most 120 characters long' :
					'';
	}

	ngOnDestroy(): void {
		this.componentDestroyed$.next();
		this.componentDestroyed$.complete();
	}
}
