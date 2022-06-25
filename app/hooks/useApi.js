import { useState } from "react";

const useAPi = (apiFunc) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		const response = await apiFunc(...args);
		setLoading(false);

		if (!response.ok) return setError(true);

		setData(response.data);
		setError(false);
	};

	return { request, data, error, loading };
};

export default useAPi;
