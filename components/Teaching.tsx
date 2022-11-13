import data from './data/teaching.json'

const Teaching = (): JSX.Element => {
    return (
        <section className="grid" id="teaching">
            <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>
            <p className = "text-sm text-gray-700">
                I am/was a teaching assistant for the following courses at Princeton University.
            </p>
            <div className="text-base ml-4 text-gray-600">
                <ul className="list-disc">
                  {data.map((classInfo) => (
                     <li key={classInfo.id}>{classInfo.id}: {classInfo.name}, {classInfo.time}</li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default Teaching;
