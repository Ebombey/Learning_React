import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/hiteshchoudhary`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(data);
  //     });
  // }, [data]);

  const data = useLoaderData();

  console.log(data);

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" className="w-[300px] " />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/hiteshchoudhary`);

  return res.json();
};
