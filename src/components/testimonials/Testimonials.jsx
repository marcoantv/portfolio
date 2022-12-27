import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: "1",
      name: "Juan vargas",
      title: "Web Designer",
      img: "https://images.unsplash.com/photo-1636484451052-018d4158a1d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      icon: "assets/setting.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "2",
      name: "pablo vargas",
      title: "Web devloper",
      img: "https://images.unsplash.com/photo-1670787507045-d939330d89dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      icon: "assets/user.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      featured: true,
    },
    {
      id: "3",
      name: "Roberto vargas",
      title: "front ent",
      img: "https://images.unsplash.com/photo-1671038003907-dcb7673fd8d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      icon: "assets/paper-plane.png",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
