
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/12 text-center mx-auto mt-11 mb-8">
            <h2 className="text-4xl">{heading}</h2>
            <p>{subHeading}</p>
            
        </div>
    );
};

export default SectionTitle;