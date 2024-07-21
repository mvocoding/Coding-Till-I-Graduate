export interface ModalItem {
    name: string;
    text: string;
    img: string;
    component: React.ReactNode;
    show: boolean;
    shortcut?: string;
}

export interface TabItem{
    title: string;
    content: React.ReactNode;
}

export interface TagItem{
    text: string;
    image?: string;
}

export interface ProgressItem{
    title: string;
    subtitle: string;
    time: string;
    fullDesc: string;
    image: string;
    tags?: TagItem[];
}

export interface ProjectItem{
    name: string;
    time: string;
    shortDesc: string;
    fullDesc: {
        role: string;
        achievement: string;
        description: string;
        images: string[];
        git?: string;
    },
    tags?: TagItem[]
}
