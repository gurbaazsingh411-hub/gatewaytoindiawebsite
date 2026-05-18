"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle2, Clock, MapPin, Phone, Edit, Save } from "lucide-react";
import { dishes } from "@/data/menu";

export function AdminDashboard() {
  const [settings, setSettings] = useState({ open: true, delivery: true });
  
  // Dummy data for simulation
  const [orders, setOrders] = useState([
    { id: "ORD-001", name: "Rahul Singh", amount: 45.50, status: "Pending", payment: "Verified (Card)", date: "Today, 18:30" },
    { id: "ORD-002", name: "Anita Desai", amount: 22.00, status: "Delivered", payment: "Cash on Delivery", date: "Today, 17:15" },
  ]);

  const [reservations, setReservations] = useState([
    { id: "RES-001", name: "Vikram Mehta", guests: 4, date: "May 20, 2026", time: "19:00", phone: "9876543210", status: "Confirmed" },
    { id: "RES-002", name: "Priya Patel", guests: 2, date: "May 21, 2026", time: "20:00", phone: "8765432109", status: "Pending" },
  ]);

  // Dynamically initialize menu items from master menu data to eliminate code repetition
  const [menuItems, setMenuItems] = useState(() => 
    dishes.map((d, index) => ({
      id: `M${index + 1}`, 
      name: d.name, 
      price: parseFloat(d.price), 
      available: true,
      category: d.category
    }))
  );

  const [editingMenuId, setEditingMenuId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState("");

  const handleToggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast.success(`Settings updated: ${key} is now ${!settings[key] ? 'On' : 'Off'}`);
  };

  const handleSaveMenu = (id: string) => {
    const parsedPrice = parseFloat(editPrice);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      toast.error("Please enter a valid price.");
      return;
    }
    setMenuItems(prev => prev.map(m => m.id === id ? { ...m, price: parsedPrice } : m));
    setEditingMenuId(null);
    toast.success("Dish price updated successfully.");
  };

  const handleToggleMenuAvailability = (id: string) => {
    setMenuItems(prev => prev.map(m => m.id === id ? { ...m, available: !m.available } : m));
    toast.success("Dish availability updated.");
  };

  return (
    <Tabs defaultValue="orders" className="space-y-6">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:w-[600px]">
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="menu">Menu</TabsTrigger>
        <TabsTrigger value="reservations">Reservations</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="orders" className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <div className="grid gap-4">
          {orders.map(order => (
            <Card key={order.id}>
              <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">{order.id}</span>
                    <Badge variant={order.status === 'Pending' ? 'secondary' : 'default'}>{order.status}</Badge>
                  </div>
                  <h3 className="font-semibold">{order.name}</h3>
                  <div className="text-sm text-muted-foreground flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {order.date}</span>
                    <span className="font-medium text-foreground">₹{order.amount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 text-sm">
                  <span className={`font-medium flex items-center gap-1 ${order.payment.includes('Verified') ? 'text-green-600' : 'text-orange-500'}`}>
                    {order.payment.includes('Verified') && <CheckCircle2 className="w-4 h-4" />}
                    {order.payment}
                  </span>
                  {order.status === 'Pending' && (
                    <Button size="sm" onClick={() => {
                      setOrders(prev => prev.map(o => o.id === order.id ? { ...o, status: "Preparing" } : o));
                      toast.success("Order status updated.");
                    }}>Mark as Preparing</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="menu" className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Menu Management</h2>
        <Card>
          <CardContent className="p-0 divide-y max-h-[600px] overflow-y-auto">
            {menuItems.map(item => (
              <div key={item.id} className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium truncate">{item.name}</h3>
                    <Badge variant="outline" className="text-[10px]">{item.category}</Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {editingMenuId === item.id ? (
                      <div className="flex items-center gap-2">
                        <span className="text-sm">₹</span>
                        <Input 
                          type="number" 
                          step="0.01"
                          className="w-24 h-7 text-sm" 
                          value={editPrice} 
                          onChange={(e) => setEditPrice(e.target.value)} 
                        />
                        <Button size="sm" variant="ghost" onClick={() => handleSaveMenu(item.id)}><Save className="w-4 h-4 text-green-600" /></Button>
                      </div>
                    ) : (
                      <>
                        <span className="text-sm text-muted-foreground">₹{item.price.toFixed(2)}</span>
                        <button onClick={() => { setEditingMenuId(item.id); setEditPrice(item.price.toString()); }} className="text-muted-foreground hover:text-primary"><Edit className="w-3 h-3" /></button>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Label htmlFor={`avail-${item.id}`} className="text-xs text-muted-foreground cursor-pointer">
                    {item.available ? "Available" : "Unavailable"}
                  </Label>
                  <Switch 
                    id={`avail-${item.id}`} 
                    checked={item.available} 
                    onCheckedChange={() => handleToggleMenuAvailability(item.id)}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reservations" className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Table Reservations</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reservations.map(res => (
            <Card key={res.id}>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold">{res.name}</h3>
                    <Badge variant={res.status === 'Confirmed' ? 'default' : 'secondary'} className="mt-1">{res.status}</Badge>
                  </div>
                  <div className="text-right text-sm">
                    <span className="font-semibold">{res.guests} Guests</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {res.date} at {res.time}</div>
                  <div className="flex items-center gap-2"><Phone className="w-3 h-3" /> {res.phone}</div>
                </div>
                {res.status === 'Pending' && (
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" className="w-full" onClick={() => {
                      setReservations(prev => prev.map(r => r.id === res.id ? { ...r, status: "Confirmed" } : r));
                      toast.success("Reservation confirmed.");
                    }}>Confirm</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Global Settings</h2>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Restaurant Open Status</Label>
                <p className="text-sm text-muted-foreground">Toggle whether the restaurant is currently taking orders online.</p>
              </div>
              <Switch checked={settings.open} onCheckedChange={() => handleToggleSetting("open")} />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Delivery Available</Label>
                <p className="text-sm text-muted-foreground">Enable or disable home delivery option for checkout.</p>
              </div>
              <Switch checked={settings.delivery} onCheckedChange={() => handleToggleSetting("delivery")} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
