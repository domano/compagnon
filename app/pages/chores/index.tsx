import {Chore, demoChore} from "../../shared/model/chores";
import { useSelector, useDispatch } from 'react-redux'
import {Dispatch, RootState} from "../_app";

function ChoreTile(c: Chore) {
    return <div className="rounded-lg m-1 bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">
                {c.title}
            </dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                    {c.countdown}
                    <span className="ml-2 text-sm font-medium text-gray-500">
                        {c.interval}
            </span>
                </div>

                <div
                    className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                    <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor"
                         viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">
              Increased by
            </span>
                    12%
                </div>
            </dd>
        </div>
    </div>;
}

export default function Chores() {
    const chores = useSelector((state: RootState) => state.choresState.chores)
    const dispatch = useDispatch<Dispatch>()


    return <>
    <dl className="mt-5 p-2 grid grid-cols-1 overflow-hidden  md:grid-cols-3 ">
        {
            chores.map((chore) => <ChoreTile {...chore} />)
        }
        <button onClick={() => {
            console.log(dispatch)
            dispatch.choresState.addChore(demoChore)
        }}>Add</button>

    </dl>
</>


}