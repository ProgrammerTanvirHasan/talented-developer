
import { FaBell} from "react-icons/fa";
import Swal from "sweetalert2";
const Subscribe = () => {



    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
       const email=form.email.value;
       Swal.fire({
        title: 'Done!',
        text: 'Thanks For Subscribing',
        icon: 'success',
        confirmButtonText: 'OK'
      })
       form.reset()
       
      }







    return (
        <div>
             <div>
            <div className="hero bg-slate-500">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className=" bg-gradient-to-t from-slate-400 to-slate-700 w-full border max-w-sm shrink-0 shadow-2xl">
      <div className="flex gap-8 font-semibold text-black p-4">
       <div >
       <p>Stay</p>
       <p> Updated!</p>
       </div>
        <div >
        <p>Stay Updated</p>
        </div>
      
      
       
      </div>
     <div>
      <p className="text-3xl text-center text-orange-950">Subscribe Now!</p>
     </div>
     <p className="p-2 text-white">Subscribe today to stay inspired, informed, and ahead of the curve.</p>
      <form onSubmit={handleSubmit} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button  className="btn bg-orange-950  text-lime-800 font-bold">Subscribe Now <span> <FaBell></FaBell> </span> </button>
        </div>
      </form>
      <p className="text-center font-bold">Join our community now!</p>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Subscribe;