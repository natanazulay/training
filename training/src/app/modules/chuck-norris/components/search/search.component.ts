import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { debounceTime, tap } from "rxjs";

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	searchForm: FormGroup;
	public searchInput: string = '';
	@Output() private generateJokesOnClickMode: EventEmitter<string> = new EventEmitter<string>();
	@Output() private generateJokesOnSearchMode: EventEmitter<string> = new EventEmitter<string>();

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
		this.searchKey?.valueChanges.pipe(
			tap(search => {
				this.generateJokesOnClickMode.emit(search);
				}
			),
			debounceTime(1000)
		).subscribe(value => this.setItems(value))
	}


	setItems(searchKey: string): void {
		this.generateJokesOnSearchMode.emit(searchKey);
	}

	get searchKey() {
		return this.searchForm.get('searchKey');
	}

	getErrorMessage() {
		return this.searchKey?.hasError('required') ? 'Search is required' :
			this.searchKey?.hasError('minlength') ? 'Enter at least 3 characters long' :
				this.searchKey?.hasError('maxlength') ? 'Enter at most 120 characters long' :
					'';
	}
}
