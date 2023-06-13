import './SectionTitle.css';
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='bg-item bg-fixed my-20 py-20 bg-slate-700 bg-blend-overlay'>
            <div className=" w-3/12 text-center mx-auto mt-11 mb-8">
            <h2 className="text-4xl text-orange-400">{heading}</h2>
            <p>{subHeading}</p>
            
        </div>
        </div>
    );
};

export default SectionTitle;