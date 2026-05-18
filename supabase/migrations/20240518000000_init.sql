-- Restaurant Settings Table
CREATE TABLE restaurant_settings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  is_open boolean DEFAULT true,
  is_delivery_available boolean DEFAULT true,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert default row
INSERT INTO restaurant_settings (is_open, is_delivery_available) VALUES (true, true);

-- Menu Items Table
CREATE TABLE menu_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  category text NOT NULL,
  veg boolean DEFAULT false,
  spice integer DEFAULT 0,
  image_url text,
  is_available boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Orders Table
CREATE TABLE orders (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email text,
  customer_name text,
  customer_phone text,
  customer_address text,
  status text DEFAULT 'pending', -- pending, paid, preparing, out_for_delivery, delivered, cancelled
  total_amount decimal(10,2) NOT NULL,
  payment_method text DEFAULT 'card', -- card, cod
  payment_id text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Order Items Table
CREATE TABLE order_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id uuid REFERENCES menu_items(id) ON DELETE SET NULL,
  quantity integer NOT NULL,
  price decimal(10,2) NOT NULL
);

-- Reservations Table
CREATE TABLE reservations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  guests integer NOT NULL,
  status text DEFAULT 'pending', -- pending, confirmed, cancelled
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies (Row Level Security)
ALTER TABLE restaurant_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access for settings" ON restaurant_settings FOR SELECT USING (true);
CREATE POLICY "Public read access for menu" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Public insert access for orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert access for order items" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert access for reservations" ON reservations FOR INSERT WITH CHECK (true);

-- Admin full access
CREATE POLICY "Admin full access settings" ON restaurant_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access menu" ON menu_items FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access orders" ON orders FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access order items" ON order_items FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access reservations" ON reservations FOR ALL USING (auth.role() = 'authenticated');
