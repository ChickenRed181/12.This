const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав'
    }
 }
 
 const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
       return 'Чик-чирик'
    }
 }
 
 function makeDomestic(isDomestic) {

    this.isDomestic = isDomestic

    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
 
    return this
 }
 
 const domesticDog = makeDomestic.bind(dog, true)()
 console.log(domesticDog)
 
 const domesticBirdWithCall = makeDomestic.call(bird, false)
 console.log(domesticBirdWithCall)
 
 const domesticBirdWithApply = makeDomestic.apply(bird, [false])
 console.log(domesticBirdWithApply)
 