interface IBase {
  id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface IUser extends IBase {
  email: string;
  name: string;
  password: string;
  phone_number: string;
  address: string;
  google_image: string;
  profile: string;
  roles: IRole[];
}

export interface Product extends IBase {
  name: string;
  slug: string;
  price: number;
  quantity: number;
  description: string;
  images: IProductImage[];
  type: IType;
  tags: ITag[];
  specificities: ISpecificity[];
}

export interface IType extends IBase {
  name: string;
}

export interface ITag extends IBase {
  name: string;
}

export interface ISpecificity extends IBase {
  name: string;
}

export interface IProductImage extends IBase {
  url: string;
}

export interface IRole extends IBase {
  name: string;
}
