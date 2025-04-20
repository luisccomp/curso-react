import Filter from '../components/Filter.jsx';
import FooterFilter from '../components/FooterFilter.jsx';
import TodosList from '../components/TodosList.jsx';

function Home() {

    return (
    <>
        <div className="container">
            <Filter />
        
            <TodosList />

            <FooterFilter />
        </div>
    </>
    )
  }
  
  export default Home
