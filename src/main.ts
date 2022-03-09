class Tamagochi {
  private readonly name: string;
  private readonly type: string;
  private happiness: number;
  private hunger: number;
  private poopcounter: number[];

  constructor() {
    let names: string[] = ['Felix', 'Tuva', 'Ann', 'Fredrik', 'Maria', 'David'];
    let types: string[] = ['Hund', 'Kanin', 'Katt', 'Hamster', 'Fladdermus', 'Råtta'];

    this.name = names[Math.floor(Math.random() * names.length)];
    this.type = types[Math.floor(Math.random() * types.length)];
    this.happiness = 5;
    this.hunger = 5;
    this.poopcounter = [];
  }
  feed(): void {
    if (this.hunger === 0) {
        this.decrementValue()
    }     
    else if(this.hunger === 10){
        this.die("Starvation")
    }
    else {
      this.hunger--;
      this.poop();
    }
  }
  play(): void {
    if (this.happiness === 10) {
      this.incrementValue();
    }
    else if(this.happiness === 0){
        this.die("Boredom")
    }
    else {
      this.happiness++;
    }
  }
  poop(){
    if(Math.random()<0.5) {
        console.log(`${this.name} just pooped, better clean it up :c`)
        this.poopcounter.push(setInterval(function(){
            console.log("poop stinky now sadge :(");
            this.decrementValue();
        }, 10000))
    }
    else{
        console.log(`${this.name} didnt poop :)`)
    }
  }
  cleanthepopo(){
    clearInterval(this.poopcounter[0]);
    this.poopcounter.splice(0, 1);
    console.log(this.poopcounter);
  }
  incrementValue():void {
    console.log("+ ", this.hunger);
    this.hunger++
    if(this.hunger === 10){
        this.die("Hunger")
    }
  }
  decrementValue():void {
    console.log("- ", this.happiness);
    this.happiness--
    if(this.happiness === 0){
        this.die("Happiness")
    }
  }
  die(reason) {
      alert(`bro died, you didnt take care of it, Not enough attension to: ${reason}`)
      window.location.reload()
  }
  getData():object {
      let roomStatus:string;
      if (this.poopcounter[0]){
          roomStatus = "Nope"
      } 
      else{
          roomStatus = "Yes"
      }
      return {
          name: this.name,
          type: this.type,
          hunger: this.hunger,
          happiness: this.happiness,
          clean: roomStatus,
      }
  }
}

(function () {
    let player1 = new Tamagochi;

    let feedbtn = document.querySelector(".feed")
    feedbtn.addEventListener("click", function(){
        player1.feed()
        updateDisplay()
    })

    let cleanbtn = document.querySelector(".cleanbtn")
    cleanbtn.addEventListener("click", function(){
        player1.cleanthepopo()
        updateDisplay()
    })

    let playbtn = document.querySelector(".play")
    playbtn.addEventListener('click', function(){
        player1.play()
        updateDisplay()
        
    })

    const updateDisplay:Function = () => {
        console.log("updateDisplay")
        interface deconstructor {
            name: string;
            type: string;
            hunger: number;
            happniess: number;
            clean: string;
        }

        const {name, type, hunger, happiness, clean}:deconstructor= player1.getData()

        console.log(name, type, hunger, happiness, clean)

        let nameDisplay = document.querySelector(".name");
        nameDisplay.innerHTML = `Name: ${name}`;

        let typeDisplay = document.querySelector(".type")
        typeDisplay.innerHTML = `Type: ${type}`;

        let hungerDisplay = document.querySelector(".hunger")
        hungerDisplay.innerHTML = `Hunger: ${hunger}`;

        let happinessDisplay = document.querySelector(".happiness")
        happinessDisplay.innerHTML = `Happiness: ${happiness}`;

        let cleanDisplay = document.querySelector(".clean")
        cleanDisplay.innerHTML = `Is the room clean? ${clean}`;

    };

    updateDisplay()
    
})();
