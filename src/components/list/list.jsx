function List(){


    const numbers = [12,32,43,323,534,432,32,43]

    const people = [{name: "Jan", age: "12"},{name: "Maciek" , age:"17"}]

    const numbers2 = numbers.map((value)=> value * 100)

    console.log(numbers,numbers2)
    return <><div>{numbers2.map((value,i)=>{return <span key={i}>{value},</span>})}</div>
        <div>{people.map((val,i)=> {return <div key={i}><p>Imię: {val.name}</p></div>})}</div></>

}
export default List 