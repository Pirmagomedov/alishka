import React from "react"

const Main = (): React.ReactNode => {
 
    interface Animal {
        eat(): void,
        sleep(): void
    }

    class Dog implements Animal {
        eat(): void {
            
        }

        sleep(): void {
            
        }

        f() {

        }
    }

    const a: Dog = new Dog()


    return <div>

    </div>
}

export default Main