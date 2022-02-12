import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, takeUntil, tap } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	public searchForm: FormGroup;
	@Output() public generateJokesFromSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() public generateJokesFromClick: EventEmitter<string>  = new EventEmitter<string>();
	public untilDestroy: Subject<void>                             = new Subject<void>();

	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {
		this.initForm()
	}

	public ngOnDestroy() {
		this.untilDestroy.next();
	}

	private initForm(): void {
		this.searchForm = this.fb.group({
			searchInput: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]]
		});

		this.searchForm.get('searchInput').valueChanges
		.pipe(
			tap((searchedValue: string) => {
				if (this.searchForm.get('searchInput')?.valid) {
					this.generateJokesFromClick.emit(searchedValue);
				}
			}),
			debounceTime(1000),
			distinctUntilChanged(),
			takeUntil(this.untilDestroy)
		).subscribe((searchedValue) => {
			if (this.searchForm.get('searchInput')?.valid) {
				this.generateJokesFromSearch.emit(searchedValue);
			}
		});
	}
}