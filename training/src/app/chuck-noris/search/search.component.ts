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
	public shouldDestroy: Subject<void>                            = new Subject<void>();

	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {
		this.searchForm = this.fb.group({
			searchInput: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]]
		});

		this.searchForm.get('searchInput')?.valueChanges
		.pipe(
			tap((term: string) => {
				if (term != this.searchForm.get('searchInput').value) {
					if (this.searchForm.get('searchInput')?.valid) {
						this.generateJokesFromClick.emit(term)
					}
				}
			}),
			debounceTime(300),
			distinctUntilChanged(),
			takeUntil(this.shouldDestroy))
		.subscribe((term) => {
			if (this.searchForm.get('searchInput')?.valid) {
				this.generateJokesFromSearch.emit(term);
			}
		});
	}

	public ngOnDestroy() {
		this.shouldDestroy.unsubscribe();
	}
}