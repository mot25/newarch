import { useQuery } from 'react-query';

import { CountryServives } from '../../../../shared/model/api/requests/requests';

export const { isFetching, error, data, refetch } = useQuery(
    'repoData',
    () => CountryServives.getCategory()
);