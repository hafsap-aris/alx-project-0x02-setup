export interface User {
    name: string;
    email: string;
  }
export interface CardProps {
    title: string;
    content: string;
  }
  export interface CardProps {
      title: string;
      content: string;
    }
    export interface PostModalProps {
      isOpen: boolean;
      onClose: () => void;
      onSubmit: (title: string, content: string) => void;
    }
    
    export interface ButtonProps {
      size: 'small' | 'medium' | 'large';
      shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
      label: string;
      onClick?: () => void;
    }
    export interface CardProps {
      title: string;
      content: string;
    }
    
    export interface ButtonProps {
      size: 'small' | 'medium' | 'large';
      shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
      label: string;
      onClick?: () => void;
    }
    
    export interface PostProps {
      title: string;
      content: string;
      userId: number;
    }
    export interface UserProps {
      id: number;
      name: string;
      email: string;
      address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
      };
    }
        
    export interface UsersPageProps {
      users: UserProps[];
    }
    export interface PostsPageProps {
      posts: PostProps[];
    }