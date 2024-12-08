const Main = () => {



    class Animal {
        constructor (nick, color) {
            this.nick = nick
            this.color = color
        }
    }

    class Bird extends Animal {
        constructor (nick, color, wings) {
            super(nick, color)
            this.wings = wings
        }

        fly () {
            console.log(`FLY`)
        }
    }

    class Eagle extends Bird {
        constructor (nick, color, wings) {
            super(nick, color, wings)
        }
    }

    class Chicken extends Bird {
        constructor (nick, color, wings) {
            super(nick, color, wings)
        }
    }

    const eag = new Eagle("Oreo", "black", "big", "yes")

    const chick = new Chicken("Chicky", "black", "small", "yes")

   chick.fly()



    return <div>

    </div>
}

export default Main