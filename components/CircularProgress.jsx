
const CircularProgress = ({ percentage, circleWidth, color, title }) => {

  const radius = circleWidth / 3
  const dashArray = radius * Math.PI * 2
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <div>
    <div className='h-full relative rounded-full'>
      <svg 
        width={circleWidth} 
        height={circleWidth} 
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        className='flex-center'
      >
        <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth="12px" r={radius} className='circle-background' />
        <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth="12px" r={radius} className='circle-progress' style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          stroke: color,
        }} />
      </svg>
      <span className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-4xl text-[#525252] block`}>{percentage}%</span>
    </div>
    {title && <p className='text-center text-lg text-[#181E4B] tracking-[1.8px] uppercase font-bold'>{title}</p>}
    </div>
  )
}

export default CircularProgress