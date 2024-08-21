import { useQuery } from '@tanstack/react-query';
import { Github } from '../api/GithubAPI';

export default function useGithub(type, username, page) {
    const github = new Github();

    const userData = useQuery({
        queryKey: ['user', username],
        queryFn: () => github.getUser(username),
        refetchOnWindowFocus: false,
    });

    const fetchedData = useQuery({
        queryKey: [type, username, page],
        queryFn: () => github.fetchData(type, username, page),
        refetchOnWindowFocus: false,
    });

    return { userData, fetchedData };
}
