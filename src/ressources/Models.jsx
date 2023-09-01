export class Article {
  constructor(id, name, description, category, images, variantes, comments) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.images = images;
    this.variantes = variantes;
    this.comments = comments;
  }
}

export class Variante {
  constructor(name, color, reference, visible, price) {
    this.name = name;
    this.color = color;
    this.reference = reference;
    this.visible = visible;
    this.price = price;
  }
}

export class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }
}

export class User {
  constructor(id, name, token, role) {
    this.id = id;
    this.name = name;
    this.token = token;
    this.role = role;
  }
}
export class UserForSign {
  constructor(name, password, email, phone, address, date, role) {
    this.userName = name;
    this.password = password;
    this.email = email;
    this.phoneNumber = phone;
    this.addresse = address;
    this.anneeNaissance = date;
    this.roles = [role];
  }
}

export class Category {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

export class PointVente {
  constructor(name, address, latitude, longitude) {
    this.name = name;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
