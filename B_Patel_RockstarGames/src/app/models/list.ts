
import { Content } from "./content";


export class List {

  private _items: Content[];

  constructor() {
    this._items = []; // initialize array
  }


  get items(): Content[] {
    return this._items;
  }

  addContent(Content: any) {
    this._items.push(Content);
  }

  lengthOfArray() {
    return this._items.length;
  }

  // addContent() {
  //   let input = this.items;
  //   return this.items.push(input);
  // }
  // lengthOfContent(): number {
  //   return this.items.length;
  // }

  // displayContent() {
  //   for (let i = 0; i < this.lengthOfContent(); i++) {
  //     return console.log(this.lengthOfContent);
  //   }
  // }


  displayContent(index: number) {
    for (var i = 0; i < this.lengthOfArray(); i++) {
      if (this._items[i].id === index) {
        return `
       <div class="card border border-2 mb-3 border-success" style="width: 18rem;">
       <img src="${this._items[index].imageLink}" class="card-img-top" alt="...">
         <div class="card-body">
           <h1 class="text-dark text-center card-title">Title : <strong>${this._items[index].title}</strong></h1>
           <h3 class="mb-3 text-dark card-text">Type : ${this._items[index].type}</h3>
           <h3 class="mb-3 text-dark card-text">Author : ${this._items[index].author}</h3>
           <p class="mb-3 text-dark card-text">Body : ${this._items[index].body}</p>
           <p class="mb-3 text-primary card-text">HashTags : ${this._items[index].hashtags?.join(' ')}</p>
         </div>
     </div>
              `
      }
    }
    return this.errorHtml(index);


  }

  errorHtml(index: number) {
    return `<div class="text-center alert alert-danger">There is no data stored at Index: <strong>${index} </strong>in the array</div>`
  }



}
