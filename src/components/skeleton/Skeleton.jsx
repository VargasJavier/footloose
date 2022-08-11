const Skeleton = () => {
  return (
    <>
      <div className='container__skeleton music'>
        <div className='content__animation'>
          <div className='content__skeleton'></div>
          <br />
          <div className='container__skeleton-title'>
            <div className='content__skeleton-title'>
              <div className='children__skeleton second__span'></div>
            </div>
            <div className='content__skeleton-title'>
              <div className='children__skeleton first__span'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skeleton;
