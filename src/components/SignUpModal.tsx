import Image from "next/image";

const years: Array<number> = [];

for (let i = 1905; i <= Number(new Date().getFullYear()); i++) {
  years.push(i);
}

interface Props {
  setShowSignUpModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUpModal({ setShowSignUpModal }: Props) {
  return (
    <div className="layer">
      <div className="signup-modal card w-[432px] min-h-[400px] px-0">
        <div className="signup-modal__header border-b-2 px-4 pb-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-3xl">Sign Up</h1>
            <Image
              src={"/times.png"}
              alt="times"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => setShowSignUpModal(false)}
            />
          </div>
          <p className="text-gray-500">It&apos;s quick and easy.</p>
        </div>
        <div className="signup-modal__body px-4 mt-3">
          <div className="signup-modal__info">
            <div className="username flex gap-3">
              <input
                type="text"
                className="small-input w-[194px]"
                placeholder="First name"
              />
              <input
                type="text"
                className="small-input w-[194px]"
                placeholder="Surname"
              />
            </div>
            <input
              type="email"
              className="small-input"
              placeholder="Email address"
            />
            <input
              type="password"
              className="small-input"
              placeholder="New Password"
            />
            <div className="birth-date">
              <small className="text-gray-500">Date of birth</small>
              <div className="flex gap-2">
                <select name="day" value={"21"} className="select">
                  {Array.from({ length: 31 }, (v, i) => i + 1).map(
                    (el, index) => {
                      return (
                        <option value={index + 1} key={el}>
                          {el}
                        </option>
                      );
                    }
                  )}
                </select>
                <select name="day" value={"Aug"} className="select">
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
                <select
                  name="day"
                  value={new Date().getFullYear()}
                  className="select"
                >
                  {years.map((el) => {
                    return (
                      <option value={el} key={el}>
                        {el}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="gender mt-2">
              <small className="text-gray-500">Gender</small>
              <div className="flex gap-2">
                <div className="select flex items-center justify-between px-2">
                  <label htmlFor="female">Female</label>
                  <input type="radio" id="female" name="gender" />
                </div>
                <div className="select flex items-center justify-between px-2">
                  <label htmlFor="male">Male</label>
                  <input type="radio" id="male" name="gender" />
                </div>
              </div>
            </div>
            <p className="max-w-full text-gray-500 mt-4 text-[11px]">
              People who use our service may have uploaded your contact
              information to <br /> Facebook.
            </p>
            <p className="max-w-full text-gray-500 mt-1 mb-4 text-[11px]">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. <br /> You may receive SMS notifications from us
              and can opt out at any time.
            </p>
          </div>
          <button className="min-w-1/2 max-w-fit px-16 h-[48px] btn-primary text-white text-xl font-semibold mt-3 bg-green-500 rounded-md mx-auto block hover:bg-green-600 transition ease-linear">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
