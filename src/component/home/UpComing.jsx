import Marquee from "react-fast-marquee";


const UpComing = () => {
    return (
        <div>
              <h2 className="text-center text-2xl font-bold py-2">UpComing Blogs</h2>
         <Marquee speed={80}>
        <div className="pb-4">
                     
            <div className="flex gap-2">

      

            <div className="card bg-base-100 image-full w-96 shadow-xl">
                   <figure>
                    <img
                   src="https://i.ibb.co.com/kxLhhJ7/successful-formalwear-businessman-climb-upstairs-climb-ladder-startup-lightbulb-blue-background-9685.jpg"
                  alt="Personal Development" />
                  </figure>
                  <div className="card-body">
                  <h2 className="text-xl text-orange-500">Personal Development</h2>
                  <p>The Importance of Lifelong Learning,Goal Setting for Success,Time Management Strategies</p>
                  <div className="card-actions justify-end">
                  <p className="text-green-500">Possible Date : 06/01/25</p>
                    </div>
                 </div>
            </div>

            <div className="card bg-base-100 image-full w-96 shadow-xl">
                   <figure>
                    <img
                   src="https://i.ibb.co.com/dthqtbb/student-online-cute-young-guy-studying-computer-glasses-green-shirt-with-cup-happy-140725-164742.jpg"
                  alt="Education" />
                  </figure>
                  <div className="card-body">
                  <h2 className="text-xl text-orange-500">Education</h2>
                  <p>Tips for maintaining focus and motivation in a virtual learning environment.</p>
                  <div className="card-actions justify-end">
                  <p className="text-green-500">Possible Date : 18/02/25</p>
                    </div>
                 </div>
            </div>



            <div className="card bg-base-100 image-full w-96 shadow-xl">
                   <figure>
                    <img
                   src="https://i.ibb.co.com/8DkVBQV/standard-quality-control-collage-23-2149631024.jpg"
                  alt="Tech & development" />
                  </figure>
                  <div className="card-body">
                  <h2 className="text-xl text-orange-500">Tech and Development</h2>
                  <p>Introduction to Component Libraries,use React,Optimizing Performance in React Applications.</p>
                  <div className="card-actions justify-end">
                  <p className="text-green-500">Possible Date : 02/02/25</p>
                    </div>
                 </div>
            </div>



            <div className="card bg-base-100 image-full w-96 shadow-xl">
                   <figure>
                    <img
                   src="https://i.ibb.co.com/Fz5m3Bt/people-holding-media-player-icons-clapper-icon-53876-65386.jpg"
                  alt="Entertainment and Media" />
                  </figure>
                  <div className="card-body">
                  <h2 className="text-xl text-orange-500">Entertainment and Media</h2>
                  <p>Top Movies/Series to Watch This Month</p>
                  <div className="card-actions justify-end">
                  <p className="text-green-500">Possible Date : 02/01/25</p>
                    </div>
                 </div>
            </div>
        
           

            </div>
            </div>
        </Marquee>
        </div>
    );
};

export default UpComing;