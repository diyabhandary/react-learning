import { useNavigate } from "react-router-dom"

const Services = () => {
  let navigator = useNavigate()    //Returns a function

  let gotopage = () => {
    navigator("/products")
  }
  return (
    <>
    <h3>Services</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ratione tempore explicabo neque nesciunt voluptatibus ducimus libero 
      animi illo eum voluptate nisi laudantium sit quam necessitatibus fugit minima, nulla sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur sint suscipit soluta in, sapiente unde aspernatur nisi omnis accusamus odio minima quibusdam temporibus iste rerum obcaecati impedit assumenda at.
      Quidem autem atque inventore sunt vitae quod esse excepturi voluptas provident natus vel fuga recusandae laboriosam ducimus culpa veniam, blanditiis, harum voluptatum repellat impedit doloremque delectus. Accusantium soluta sequi nesciunt.
      Iusto cumque suscipit porro harum animi, facilis ad ratione itaque molestiae perferendis sunt doloribus, delectus maxime at quis veritatis fuga sapiente atque, consectetur quidem id. Adipisci alias accusamus assumenda animi.
      Itaque ipsum voluptates veritatis doloremque fugiat nam adipisci consequuntur eos molestiae soluta modi porro iste a minus, suscipit repellat dolorem voluptatem assumenda consequatur quo aspernatur natus. Nulla harum reprehenderit expedita!
      CorpModi quae temporibus pariatur repudiandae nihil at beatae dignissimos adipisci! Labore, excepturi eaque. Doloremque, maiores. Laudantium, maiores inventore laboriosam, deleniti, quod officiis magnam rem explicabo voluptates voluptas ullam. Veritatis, mollitia.
      tecto, animi neque quasi repellendus officiis vero vitae numquam sunt cumque sit quo totam fugiat dignissimos rem repudiandae consequuntur, a quidem.
      Fuga rerum fugit asp</p>
      <p>Dicta sint inventore quis culpa voluptatum voluptatem autem excepturi ex unde et sunt ea, reprehenderit nihil nobis alias facilis ut quos quisquam sapiente dolorum ipsa modi, iste, dolor vero? Nesciunt!
      Accusantium consectetur, eius officia ipsa accusamus facere veniam iure sit at cumque fugit eaque nemo excepturi dolore deserunt necessitatibus repudiandae quod incidunt non pariatur explicabo delectus soluta debitis? Ipsum, delectus.
      Eaque eveniet doloremque sequi!odio illum iure ratione molestias minus doloribus. Ab corporis voluptatibus repellat.
      Facere quia suscipit aliquid eius totam odio nam distinctio, nihil corporis molestiae commodi fuga et tenetur perspiciatis nobis accusamus dolore doloremque! Vel harum facilis placeat sint. Magni aut possimus quam?
      Fugit libero aliquid repudiandae! Quos sapiente, ex quia tenetur mollitia libero beatae ipsam molestias, officiis nisi dolorum quaerat, repellendus possimus nihil porro voluptate facere doloremque? Officia quas labore illo voluptas.
      Corporis, blanditiis iusto. Cupiditate natus nostrum perspiciatis, quod libero optio quidem, maxime a, dolorum id soluta aut praesentium consequatur quaerat! Quaerat placeat obcaecati nostrum odio maiores, dolores officia atque dolor.
      Temporibus id esse assumenda nisi quidem deserunt eos, beatae consequatur ipsa fugit nostrum sint qui, consectetur aspernatur voluptatibus autem nam, possimus vitae inventore vero ut in? Voluptates vel mollitia omnis.
      m qui amet similique neque reiciendis laboriosam accusantium maiores repudiandae, unde quos exercitationem temporibus ipsa eos est doloremque illo quis odio sint deleniti assumenda rerum!
      Molestiaeceat dolore quaerat id cupiditate earum nihil autem vero! Officiis, quasi totam? Iste quis expedita nihil eaque!</p>
      <button onClick={gotopage}>Goto Products</button>
    </>
  )
}

export default Services