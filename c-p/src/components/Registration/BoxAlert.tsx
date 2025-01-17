import { useNavigate } from 'react-router-dom';
interface ChildProps {
    setChekednav: React.Dispatch<React.SetStateAction<boolean>>;
    state: boolean;
}

const BoxAlert: React.FC<ChildProps> = ({ setChekednav,state }) => {
    const naviget=useNavigate();
    const hanndel=()=>{
        setChekednav(false)
        if(state)
            naviget('/E')

    }
  return (
    <div role="alert" className="alert alert-success w-96 ml-96 m-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm">ثبت نام در این قسمت با موفقیت انجام شد</span>
      <button onClick={hanndel} className="btn block btn-xs" type="button">
        تایید
      </button>
    </div>
  );
};

export default BoxAlert;
