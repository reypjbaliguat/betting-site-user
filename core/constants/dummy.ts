import { DerbyStatuses } from "@/types/derby";
import dayjs from "dayjs";

export const dummyDerby = [
    {
        id: '1',
        name: 'Calajoan Derby',
        location: 'Minglanilla City',
        videoSrc: 'https://www.youtube.com/embed/jfKfPfyJRdk?si=S2H0u1ypucJ1TeHR',
        startDate: dayjs().format('MMM, DD, YYYY'),
        endDate: dayjs().add(1, 'day').format('MMM, DD, YYYY'),
        status: DerbyStatuses.SCHEDULED,
        prizePool: 2000000
    },
    {
        id: '2',
        name: 'Sugarland Derby',
        location: 'Talisay City',
        videoSrc: 'https://www.youtube.com/embed/jfKfPfyJRdk?si=S2H0u1ypucJ1TeHR',
        startDate: dayjs().add(2, 'day').format('MMM, DD, YYYY'),
        endDate: dayjs().add(3, 'day').format('MMM, DD, YYYY'),
        status: DerbyStatuses.SCHEDULED,
        prizePool: 2000000
    },
    {
        id: '3',
        name: 'Inayawan Derby',
        location: 'Cebu City',
        videoSrc: 'https://www.youtube.com/embed/jfKfPfyJRdk?si=S2H0u1ypucJ1TeHR',
        startDate: dayjs().add(3, 'day').format('MMM, DD, YYYY'),
        endDate: dayjs().add(4, 'day').format('MMM, DD, YYYY'),
        status: DerbyStatuses.SCHEDULED,
        prizePool: 2000000
    },
    {
        id: '4',
        name: 'Cebu City Derby',
        location: 'Cebu City',
        videoSrc: 'https://www.youtube.com/embed/jfKfPfyJRdk?si=S2H0u1ypucJ1TeHR',
        startDate: dayjs().add(5, 'day').format('MMM, DD, YYYY'),
        endDate: dayjs().add(6, 'day').format('MMM, DD, YYYY'),
        status: DerbyStatuses.SCHEDULED,
        prizePool: 2000000
    }
];