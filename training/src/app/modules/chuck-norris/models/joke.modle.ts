export class Joke {
	categories: Array<any>;
	createDate: string;
	iconUrl: string;
	id: string;
	updatedDate: string;
	url: string;
	value: string;
	isExpanded: boolean;

	public static parseToJoke(data: any): Joke {
		const joke       = new Joke();
		joke.categories  = data[ 'categories' ];
		joke.createDate  = data[ 'created_at' ];
		joke.iconUrl     = data[ 'icon_url' ];
		joke.id          = data[ 'id' ];
		joke.updatedDate = data[ 'updated_at' ];
		joke.url         = data[ 'url' ];
		joke.value       = data[ 'value' ];
		joke.isExpanded = false
		return joke;
	}
}

