import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { ChuckNorrisModule } from "../../modules/chuck-norris.module";

describe('SearchComponent', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SearchComponent],
			imports: [ChuckNorrisModule]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture   = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('searchKeyFormControl (getter) should return', () => {
		const searchValue = 'rew';
		component.searchForm.controls[ 'searchKey' ].setValue(searchValue);
		expect(component.searchKeyFormControl.value).toEqual(searchValue);
	});

	it('check getErrorMessage functionality', () => {
		fixture.detectChanges();
		const required  = '';
		const minLength = 're';
		const maxLength = 'char'.repeat(40);
		component.searchForm.controls[ 'searchKey' ].setValue(required);
		expect(component.getErrorMessage()).toEqual('Search is required');
		component.searchForm.controls[ 'searchKey' ].setValue(minLength);
		expect(component.getErrorMessage()).toEqual('Enter at least 3 characters long');
		component.searchForm.controls[ 'searchKey' ].setValue(maxLength);
		expect(component.getErrorMessage()).toEqual('Enter at most 120 characters long');
	});

});
