import { firestore } from "../config/firebaseAppConfig";

const RecipesPage = () => {
  return (
    <div className="recipes--container">
      <h1>recipes</h1>
    </div>
  );
};

export async function getServerSideProps() {
  const entries = await firestore.collection("recipes").get();
  const entriesData = entries.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  }));

  console.log(entriesData);
  return {
    props: { entries: entriesData },
  };
}

export default RecipesPage;
