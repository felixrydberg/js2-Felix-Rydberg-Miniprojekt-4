// class Tamagochi {
//   private readonly name: string;
//   private readonly type: string;
//   private happiens: number;
//   private hungry: number;
//   private poopcounter;

//   constructor() {
//     let names: string[] = ['Felix', 'Tuva', 'Ann', 'Fredrik', 'Maria', 'David'];
//     let types: string[] = [
//       'Hund',
//       'Kanin',
//       'Katt',
//       'Hamster',
//       'Fladdermus',
//       'Råtta',
//     ];

//     this.name = names[Math.floor(Math.random() * names.length)];
//     this.type = types[Math.floor(Math.random() * types.length)];
//     this.happiens = 5;
//     this.hungry = 5;
//   }
//   feed(): void {
//     if (this.hungry === 0) {
//       // - happines
//     } else {
//       this.hungry--;
//     }
//   }
//   play(): void {
//     if (this.happiens === 10) {
//       // + hungry
//     } else {
//       this.happiens++;
//     }
//   }
//   minusValue(target: 'happiens' | 'hungry', action: '+' | '-'): void {}
//   plusValue(target: 'happiens' | 'hungry', action: '+' | '-'): void {}
// }

(function () {
  console.log('test');
})();
