const Main = () => {


    let a = {
        a:1,
        b:2,
        c: () => {
            return this
        }
    }
    console.log(a.c())
   

    return <div>

    </div>
}

export default Main