import styles from "./displayusers.module.css";

const Displayusers = () => {

    let userdata = [
    { id: 1, username: "Rahul Sharma", image: "https://i.pravatar.cc/150?img=1" },
    { id: 2, username: "Sneha Patil",  image: "https://i.pravatar.cc/150?img=2" },
    { id: 3, username: "Amit Verma",   image: "https://i.pravatar.cc/150?img=3" },
    { id: 4, username: "Priya Desai",  image: "https://i.pravatar.cc/150?img=4" },
    { id: 5, username: "Karan Mehta",  image: "https://i.pravatar.cc/150?img=5" },
    { id: 6, username: "Neha Kulkarni",image: "https://i.pravatar.cc/150?img=6" },
    { id: 7, username: "Rohan Gupta",  image: "https://i.pravatar.cc/150?img=7" },
    { id: 8, username: "Pooja Singh",  image: "https://i.pravatar.cc/150?img=8" },
    { id: 9, username: "Aditya Joshi", image: "https://i.pravatar.cc/150?img=9" },
    { id: 10,username: "Anjali Nair",  image: "https://i.pravatar.cc/150?img=10" },
    { id: 11,username: "Vikram Shah",  image: "https://i.pravatar.cc/150?img=11" },
    { id: 12,username: "Meera Kapoor", image: "https://i.pravatar.cc/150?img=12" },
    { id: 13,username: "Arjun Reddy",  image: "https://i.pravatar.cc/150?img=13" },
    { id: 14,username: "Simran Kaur",  image: "https://i.pravatar.cc/150?img=14" },
    { id: 15,username: "Manish Yadav", image: "https://i.pravatar.cc/150?img=15" },
    { id: 16,username: "Kavita Iyer",  image: "https://i.pravatar.cc/150?img=16" },
    { id: 17,username: "Sandeep Mishra",image: "https://i.pravatar.cc/150?img=17" },
    { id: 18,username: "Ritu Agarwal", image: "https://i.pravatar.cc/150?img=18" },
    { id: 19,username: "Deepak Choudhary", image: "https://i.pravatar.cc/150?img=19" },
    { id: 20,username: "Nisha Jain", image: "https://i.pravatar.cc/150?img=20" }
  ] 
  return (
    <main className="userbox">
      {
        userdata.map((value,index)=>{
          console.log(value); //{id:1, username: 'Rahul Sharma',image: 'https://i.pravatar.cc/150?img=1'}
          return(
            <div className="cards" key={value.id}>
              <h3>{value.username}</h3>
              <img src={value.image}/>

            </div>//cards
          )
        })
      }
    </main>//userbox
  )
}
export default Displayusers
