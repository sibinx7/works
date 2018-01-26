function ShowName(){
	console.log(this.name)
}


ShowName.call({name:'John Doe'})