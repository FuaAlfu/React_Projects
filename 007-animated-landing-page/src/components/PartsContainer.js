import Parts from './Parts'

const  PartsContainer = ({className, imageUrl}) => {
    return (
      <div >
          <Parts className="partWrapper-1" imageUrl=""/>
          <Parts className="partWrapper-2" imageUrl=""/>
          <Parts className="partWrapper-3" imageUrl=""/>
          <Parts className="partWrapper-4" imageUrl=""/>
          <Parts className="partWrapper-5" imageUrl=""/>
      </div>
    );
}

export default PartsContainer;
