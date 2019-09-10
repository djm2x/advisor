export const consults: IConsult[] = [
    { id: 1, title: 'Taxes', icon: '../../assets/taxes.svg' },
    { id: 2, title: 'family', icon: '../../assets/family-code.svg' },
    { id: 3, title: 'public', icon: '../../assets/public_relations.svg' },
];

interface IConsult {
    id: number;
    title: string;
    icon: string;
}
