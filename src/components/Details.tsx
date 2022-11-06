import React from "react";
import {IProps} from '../types/globalTypes';


const Details: React.FC<IProps> = ({address}) => {
  
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto bg-white shadow rounded-lg p-8 mx-8 text-center lg:text-left lg:mt-10 lg:-mb-[75px] relative z-[10000]">
        <div className="lg:border-r lg:border-slate-400">
          <h1 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
            Ip Address
          </h1>
          <p className="font-bold text-slate-900 text-lg md:text-xl lg:text-2xl">
            {address.ip}
          </p>
        </div>

        <div className="lg:border-r lg:border-slate-400">
          <h1 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
            Location
          </h1>
          <p className="font-bold text-slate-900 text-lg md:text-xl lg:text-2xl">
            {address.location.city} {address.location.region}
          </p>
        </div>

        <div className="lg:border-r lg:border-slate-400">
          <h1 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
            Timezone
          </h1>
          <p className="font-bold text-slate-900 text-lg md:text-xl lg:text-2xl">
            UTC {address.location.timezone}
          </p>
        </div>

        <div>
          <h1 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
            ISP
          </h1>
          <p className="font-bold text-slate-900 text-lg md:text-xl lg:text-2xl">
            {address.isp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
