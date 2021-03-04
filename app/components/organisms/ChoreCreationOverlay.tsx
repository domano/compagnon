import {Transition} from "@headlessui/react"
import {Dispatch, RootState} from "../../pages/_app";
import {useSelector, useDispatch} from 'react-redux'
import {useForm} from "react-hook-form";

// TODO: Make only one day selectable, pull text out into global state, dispatch new chore

function Repetition() {
    return <>
        <legend className="text-sm font-medium text-gray-900">
            Repeat
        </legend>
        <div className="mt-2 space-y-5">
            <div className="relative flex items-start">
                <div className="absolute flex items-center h-5">
                    <input id="weekly" name="interval"
                           aria-describedby="weekly_description"
                           type="radio"
                           className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                </div>
                <div className="pl-7 text-sm">
                    <label htmlFor="weekly"
                           className="font-medium text-gray-900">
                        Weekly
                    </label>
                    <p id="weekly_description"
                       className="text-gray-500">
                        You can set multiple weekdays.
                    </p>
                </div>
            </div>
            <div>
                <div className="relative flex items-start">
                    <div className="absolute flex items-center h-5">
                        <input id="biweekly"
                               name="interval"
                               aria-describedby="biweekly_description"
                               type="radio"
                               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="pl-7 text-sm">
                        <label htmlFor="biweekly"
                               className="font-medium text-gray-900">
                            Every other week
                        </label>
                        <p id="biweekly_description"
                           className="text-gray-500">
                            You have every other week to finish your chore.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative flex items-start">
                    <div className="absolute flex items-center h-5">
                        <input id="privacy_private" name="interval"
                               aria-describedby="biweekly_description"
                               type="radio"
                               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                    </div>
                    <div className="pl-7 text-sm">
                        <label htmlFor="privacy_private"
                               className="font-medium text-gray-900">
                            Monthly
                        </label>
                        <p id="monthly"
                           className="text-gray-500">
                            You have the whole month to finish your chore
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

function DayButton(props) {
    return <button {...props} type="button"
                   className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:bg-indigo-300">
        {props.children}
    </button>;
}

function ChoreForm() {
    const dispatch = useDispatch<Dispatch>()
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => console.log(data);

    return <form onSubmit={handleSubmit(onSubmit)}
                 className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
        <div className="flex-1 h-0 overflow-y-auto">
            <div className="py-6 px-4 bg-indigo-700 sm:px-6">
                <div className="flex items-center justify-between">
                    <h2 id="slide-over-heading" className="text-lg font-medium text-white">
                        New Chore
                    </h2>
                </div>
                <div className="mt-1">
                    <p className="text-sm text-indigo-300">
                        Track a new chore.
                    </p>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="px-4 divide-y divide-gray-200 sm:px-6">
                    <div className="space-y-6 pt-6 pb-5">
                        <div>
                            <label htmlFor="project_name"
                                   className="block text-sm font-medium text-gray-900">
                                Chore name
                            </label>
                            <div className="mt-1">
                                <input type="text" name="project_name" id="project_name"
                                       className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                            </div>
                        </div>
                        <h3 className="text-sm font-medium text-gray-900">
                            Weekdays
                        </h3>
                        <div className="mt-2">
                                <span className="relative z-0 inline-flex shadow-sm rounded-md">
                                    <DayButton>Mo</DayButton>
                                    <DayButton>Tu</DayButton>
                                    <DayButton>We</DayButton>
                                    <DayButton>Th</DayButton>
                                    <DayButton>Fr</DayButton>
                                    <DayButton>Sa</DayButton>
                                    <DayButton>Su</DayButton>

</span>
                        </div>
                        <Repetition/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-shrink-0 px-4 py-4 flex justify-end">
            <button type="button" onClick={() => dispatch.choresState.toggleCreator()}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
            </button>
            <button type="submit"
                    className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
            </button>
        </div>
    </form>;
}

export default function ChoreCreationOverlay(props) {
    const show = useSelector((state: RootState) => state.choresState.showChoreCreator)
    const dispatch = useDispatch<Dispatch>()


    return (
        <section className="absolute inset-y-0 pl-16 max-w-full h-screen right-0 flex"
                 aria-labelledby="slide-over-heading">
            <Transition
                show={show}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                <div className="w-screen h-screen max-w-md">
                    <ChoreForm />
                </div>
            </Transition>
        </section>
    )

}