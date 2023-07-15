import { useParams } from "react-router-dom";
import MyButton from "../components/MyButton";
import JobData from "../assets/job-directory-data.json";
import MyBlackButton from "../components/MyBlackButton";
import JobPage from "../components/JobPage";

function Greeting() {
  return <div>Hello</div>;
}

function Job(Array: any) {
  const param = useParams();

  // create a function to filter element in JobData which id === param.id, return an object
  const filteredArray = JobData.filter((item) => String(item.id) === param.id);
  const [filteredjob] = filteredArray;

  // // destructuring
  // const array = [Job, 2, 3];
  // console.log(array);

  // const [a, b, c] = array;
  // console.log(a, b, c);

  // console.log(filteredjob);

  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center mx-[200px] h-[80px]">
        <h1 className="text-xl font-bold">Kerja-IT</h1>
        <div className="space-x-2">
          <MyButton text="Talent" />
          <MyButton text="Post jobs" />
          <MyBlackButton text="Mohd Sofi" />
        </div>
      </div>
      {/* subheader */}
      <div className="flex justify-between items-center px-[200px] h-[80px] bg-blue-700">
        <p className="text-white">
          👻 Your profile is invisibile - employers can't find you.
        </p>
        <MyButton text="Edit my profile" />
      </div>
      <div className=" flex justify-center items-center bg-[#f9fafb]">
        <JobPage />;
      </div>
    </div>
  );
}
export default Job;

{
  /* {JobData.map((Job, index) => {
  return (
    <Greeting job={job} key={index} />
    
  );
})} */
}
