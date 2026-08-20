import Card from "./components/Card";
// import User from "./components/User";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJovWwWRCdXgXSaeHpeEkAZClChH5Li8YPZevB7hTEA&s=10",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEej-B-dTbyp-oJ3GLCfQ3EYHxn9TpTooXcss2g9mJMQ&s=10",
      name: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwi7fVe_STXcwU90dt2bOYrsYCu9dqMsFgmMFPKoQUkA&s=10",
      name: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$38/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0lP2_kgCkHUWXDSmcPvGTYhE2XLv3amPV-aPYMxhrQ&s=10",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$32/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tOKniEmj59RYjBLBfdN7ENpRBQR5xXZ4zhk5EPbKNw&s=10",
      name: "IBM",
      datePosted: "3 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$36/hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJ75zAWLouuBPMJ_OZHsDCSkSxZfVphcaGggKkBw3ag&s=10",
      name: "Infosys",
      datePosted: "4 weeks ago",
      post: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$25/hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qcJK11Ht-Pci7lf1UFqFh8-ssXecWJoIJiBc5psOZg&s=10",
      name: "TCS",
      datePosted: "6 weeks ago",
      post: "Node.js Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$28/hour",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      name: "Netflix",
      datePosted: "8 weeks ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$45/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCssfTJIp9RiRgE5FtiftQMEfQx_rzov_R48esB1rqA&s=10",
      name: "Adobe",
      datePosted: "9 weeks ago",
      post: "UI/UX Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$34/hour",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpunUgf2FwwRgBsTqAw2B0KXeXuROKaPNgfAwyuuVLwg&s=10",
      name: "Spotify",
      datePosted: "10 weeks ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$42/hour",
      location: "Gurgaon, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((elem, id) => {
        return (
          <div key={id}>
            <Card
              brandLogo={elem.brandLogo}
              name={elem.name}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
