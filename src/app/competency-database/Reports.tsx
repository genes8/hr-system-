"use client";

import { useState } from 'react'
import { Download, FileText, Users, Briefcase, Award, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

export default function Reports() {
  const [reportType, setReportType] = useState('competency')
  const [dateRange, setDateRange] = useState('last30days')
  const [department, setDepartment] = useState('all')

  const competencyData = [
    { name: 'Upravljanje elektroenergetskim sistemima', value: 85 },
    { name: 'Analiza podataka u energetici', value: 72 },
    { name: 'Energetska efikasnost', value: 90 },
    { name: 'Održavanje elektroenergetskih postrojenja', value: 78 },
    { name: 'Zaštita na radu u elektroenergetici', value: 95 },
  ]

  const departmentData = [
    { name: 'Distribucija', employees: 120, avgCompetency: 82 },
    { name: 'Proizvodnja', employees: 85, avgCompetency: 79 },
    { name: 'Razvoj', employees: 50, avgCompetency: 88 },
    { name: 'Upravljanje', employees: 30, avgCompetency: 85 },
    { name: 'Finansije', employees: 25, avgCompetency: 76 },
  ]

  const trainingData = [
    { name: 'Jan', completed: 45, ongoing: 30 },
    { name: 'Feb', completed: 50, ongoing: 35 },
    { name: 'Mar', completed: 60, ongoing: 40 },
    { name: 'Apr', completed: 55, ongoing: 38 },
    { name: 'Maj', completed: 70, ongoing: 45 },
    { name: 'Jun', completed: 65, ongoing: 42 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Izveštaji</h1>
      </div>
      
      <div className="flex-grow p-6">
        <Card>
          <CardHeader>
            <CardTitle>Generisanje izveštaja</CardTitle>
            <CardDescription>Kreirajte prilagođene izveštaje za različite aspekte razvoja ljudskih resursa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <Label htmlFor="report-type">Tip izveštaja</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Izaberite tip izveštaja" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="competency">Pregled kompetencija</SelectItem>
                      <SelectItem value="department">Analiza po sektorima</SelectItem>
                      <SelectItem value="training">Statistika obuka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-grow">
                  <Label htmlFor="date-range">Vremenski period</Label>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger id="date-range">
                      <SelectValue placeholder="Izaberite vremenski period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last30days">Poslednjih 30 dana</SelectItem>
                      <SelectItem value="last3months">Poslednja 3 meseca</SelectItem>
                      <SelectItem value="last6months">Poslednjih 6 meseci</SelectItem>
                      <SelectItem value="lastyear">Poslednja godina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-grow">
                  <Label htmlFor="department">Sektor</Label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Izaberite sektor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Svi sektori</SelectItem>
                      <SelectItem value="distribution">Distribucija</SelectItem>
                      <SelectItem value="production">Proizvodnja</SelectItem>
                      <SelectItem value="development">Razvoj</SelectItem>
                      <SelectItem value="management">Upravljanje</SelectItem>
                      <SelectItem value="finance">Finansije</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generiši izveštaj
              </Button>

              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Pregled</TabsTrigger>
                  <TabsTrigger value="details">Detalji</TabsTrigger>
                  <TabsTrigger value="charts">Grafikoni</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Ukupan broj zaposlenih
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">310</div>
                        <p className="text-xs text-muted-foreground">
                          +2.5% u odnosu na prethodni period
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Prosečan nivo kompetencija
                        </CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">82%</div>
                        <p className="text-xs text-muted-foreground">
                          +5% u odnosu na prethodni period
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Završene obuke
                        </CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">345</div>
                        <p className="text-xs text-muted-foreground">
                          +12% u odnosu na prethodni period
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Stopa unapređenja veština
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">8.2%</div>
                        <p className="text-xs text-muted-foreground">
                          +1.2% u odnosu na prethodni period
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detaljan pregled</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Sektor</TableHead>
                            <TableHead>Broj zaposlenih</TableHead>
                            <TableHead>Prosečan nivo kompetencija</TableHead>
                            <TableHead>Završene obuke</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {departmentData.map((dept) => (
                            <TableRow key={dept.name}>
                              <TableCell className="font-medium">{dept.name}</TableCell>
                              <TableCell>{dept.employees}</TableCell>
                              <TableCell>{dept.avgCompetency}%</TableCell>
                              <TableCell>{Math.floor(dept.employees * 0.8)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="charts">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Distribucija kompetencija</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={competencyData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {competencyData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Trend obuka</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={trainingData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="completed" fill="#8884d8" name="Završene obuke" />
                            <Bar dataKey="ongoing" fill="#82ca9d" name="Obuke u toku" />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Preuzmi izveštaj
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}