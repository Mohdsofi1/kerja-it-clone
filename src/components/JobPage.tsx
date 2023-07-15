// import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";

import ApplyButton from "./ApplyButton";

function JobPage(props: any) {
  // function to detect if the year is 3032, isNew === true
  //   const date = new Date(props.job.post_date);
  //   const isNew = date.getFullYear() === 2023;
  //   console.log(date);

  return (
    <div className="mt-[10px]">
      {" "}
      Jobs / Sofware Engineer
      <div className="py-[30px] px-[40px] w-[700px] h-[100%] border rounded-md bg-white mt-[10px]">
        <p className="bg-gray-200 p-1 inline-block rounded mb-[10px]">java</p>
        <div>
          <h4 className="text-2xl font-medium ">Sofware Engineer</h4>
          <p>Gfk</p>
        </div>
        <div className="mt-[10px] mb-[30px]">
          <p>🗓️ Posted on 25 julai</p>
          <p>📍 kuala Lumpur</p>
          <p className="capitalize">💼 full time </p>
        </div>
        <ApplyButton />
        <div>
          <h3 className="text-2xl font-medium ">✍🏻 Job Description</h3>
        </div>
      </div>
    </div>
  );
}
export default JobPage;
