const ShimmerCard = ()=>{
    return (
        <div className="shimmer-card h-60 w-40 bg-gray-200 m-4 p-2">
            <div className="shimmer-image h-32 bg-gray-300 m-2"></div>
            <div className="shimmer-content h-16 bg-gray-300 m-2"></div>
        </div>
    )
}

const Shimmer = ()=>{
    return (
        <div className="shimmer-container flex flex-wrap w-full">
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
           <ShimmerCard/>
        </div>
    )
};

export default Shimmer;