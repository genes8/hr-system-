'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { AlertCircle, BarChart2, BookOpen, CheckSquare, FileText, PlusCircle, Send, Settings, Users, Target, TrendingUp, Award, Star } from 'lucide-react'

export function UpravljanjeTalentima() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const employees = [
    { id: 1, name: "Ana Petrović", position: "Senior Developer", potential: "Visok", performance: "Izvanredna", riskOfLeaving: "Nizak" },
    { id: 2, name: "Marko Jovanović", position: "Project Manager", potential: "Srednji", performance: "Dobra", riskOfLeaving: "Srednji" },
    { id: 3, name: "Jelena Nikolić", position: "HR Specialist", potential: "Visok", performance: "Izvanredna", riskOfLeaving: "Nizak" },
    { id: 4, name: "Stefan Đorđević", position: "Marketing Analyst", potential: "Srednji", performance: "Dobra", riskOfLeaving: "Visok" },
  ]

  const developmentPlans = [
    { id: 1, employeeName: "Ana Petrović", plan: "Liderstvo i upravljanje timom", progress: 75 },
    { id: 2, employeeName: "Marko Jovanović", plan: "Napredne tehnike upravljanja projektima", progress: 50 },
    { id: 3, employeeName: "Jelena Nikolić", plan: "Strategije zadržavanja talenata", progress: 80 },
  ]

  const successorshipPlans = [
    { position: "CTO", successors: ["Ana Petrović", "Milan Stojanović"], readiness: [80, 65] },
    { position: "Head of HR", successors: ["Jelena Nikolić", "Ivana Janković"], readiness: [90, 75] },
  ]

  const talentPoolData = [
    { name: 'Lideri', value: 20 },
    { name: 'Stručnjaci', value: 30 },
    { name: 'Visoki potencijali', value: 25 },
    { name: 'Ključni izvršioci', value: 25 },
  ]

  const retentionRiskData = [
    { name: 'Nizak', value: 60 },
    { name: 'Srednji', value: 30 },
    { name: 'Visok', value: 10 },
  ]

  const performanceTrendData = [
    { month: 'Jan', performance: 3.8 },
    { month: 'Feb', performance: 3.9 },
    { month: 'Mar', performance: 4.0 },
    { month: 'Apr', performance: 4.1 },
    { month: 'Maj', performance: 4.2 },
    { month: 'Jun', performance: 4.3 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Upravljanje Talentima</h1>
      </header>

      <main className="flex-grow p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">
              <BarChart2 className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="identifikacija">
              <Target className="w-4 h-4 mr-2" />
              Identifikacija talenata
            </TabsTrigger>
            <TabsTrigger value="razvoj">
              <TrendingUp className="w-4 h-4 mr-2" />
              Razvoj talenata
            </TabsTrigger>
            <TabsTrigger value="succession">
              <Users className="w-4 h-4 mr-2" />
              Succession Planning
            </TabsTrigger>
            <TabsTrigger value="retention">
              <Award className="w-4 h-4 mr-2" />
              Retention strategije
            </TabsTrigger>
            <TabsTrigger value="analitika">
              <BarChart2 className="w-4 h-4 mr-2" />
              Analitika talenata
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card>
              <CardHeader>
                <CardTitle>Talent Management Dashboard</CardTitle>
                <CardDescription>Pregled ključnih indikatora upravljanja talentima</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Identifikovani talenti</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">42</div>
                      <p className="text-xs text-muted-foreground">+8% u odnosu na prošli kvartal</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Prosečna ocena performansi</CardTitle>
                      <Target className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4.2/5</div>
                      <p className="text-xs text-muted-foreground">+0.3 u odnosu na prošli kvartal</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Stopa zadržavanja talenata</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">95%</div>
                      <p className="text-xs text-muted-foreground">+2% u odnosu na prošlu godinu</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Distribucija talent pool-a</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={talentPoolData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {talentPoolData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Trend performansi</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={performanceTrendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="performance" stroke="#8884d8" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="identifikacija">
            <Card>
              <CardHeader>
                <CardTitle>Identifikacija talenata</CardTitle>
                <CardDescription>Pregled i upravljanje visoko potencijalnim zaposlenima</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Pretraži zaposlene..." className="max-w-sm" />
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Dodaj novi talent
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ime</TableHead>
                        <TableHead>Pozicija</TableHead>
                        <TableHead>Potencijal</TableHead>
                        <TableHead>Performanse</TableHead>
                        <TableHead>Rizik od odlaska</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {employees.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell className="font-medium">{employee.name}</TableCell>
                          <TableCell>{employee.position}</TableCell>
                          <TableCell>
                            <Badge variant={employee.potential === "Visok" ? "default" : "secondary"}>
                              {employee.potential}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={employee.performance === "Izvanredna" ? "default" : "secondary"}>
                              {employee.performance}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={employee.riskOfLeaving === "Nizak" ? "default" : employee.riskOfLeaving === "Srednji" ? "secondary" : "destructive"}>
                              {employee.riskOfLeaving}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Detalji</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="razvoj">
            <Card>
              <CardHeader>
                <CardTitle>Razvoj talenata</CardTitle>
                <CardDescription>Upravljanje individualnim razvojnim planovima</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Select>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Izaberi zaposlenog" />
                      </SelectTrigger>
                      <SelectContent>
                        {employees.map((employee) => (
                          <SelectItem key={employee.id} value={employee.id.toString()}>
                            {employee.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Kreiraj novi plan
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Zaposleni</TableHead>
                        <TableHead>Razvojni plan</TableHead>
                        <TableHead>Napredak</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {developmentPlans.map((plan) => (
                        <TableRow key={plan.id}>
                          <TableCell className="font-medium">{plan.employeeName}</TableCell>
                          <TableCell>{plan.plan}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Progress value={plan.progress} className="w-[60px] mr-2" />
                              <span>{plan.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Ažuriraj</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="succession">
            <Card>
              <CardHeader>
                <CardTitle>Succession Planning</CardTitle>
                <CardDescription>Upravljanje planovima nasleđivanja za ključne pozicije</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Select>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Izaberi poziciju" />
                      </SelectTrigger>
                      <SelectContent>
                        {successorshipPlans.map((plan, index) => (
                          <SelectItem key={index} value={plan.position}>
                            {plan.position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Dodaj novi plan
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pozicija</TableHead>
                        <TableHead>Potencijalni naslednici</TableHead>
                        <TableHead>Spremnost</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {successorshipPlans.map((plan, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{plan.position}</TableCell>
                          <TableCell>
                            <ul>
                              {plan.successors.map((successor, i) => (
                                <li key={i}>{successor}</li>
                              ))}
                            </ul>
                          </TableCell>
                          <TableCell>
                            <ul>
                              {plan.readiness.map((readiness, i) => (
                                <li key={i}>
                                  <div className="flex items-center">
                                    <Progress value={readiness} className="w-[60px] mr-2" />
                                    <span>{readiness}%</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Ažuriraj</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retention">
            <Card>
              <CardHeader>
                <CardTitle>Retention strategije</CardTitle>
                <CardDescription>Implementacija strategija za zadržavanje ključnih talenata</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rizik od odlaska</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={retentionRiskData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {retentionRiskData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Preporučene retention strategije</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Implementirati program mentorstva za visoko potencijalne zaposlene</li>
                        <li>Povećati mogućnosti za profesionalni razvoj i obuke</li>
                        <li>Unaprediti sistem nagrađivanja i priznanja za izuzetne performanse</li>
                        <li>Poboljšati work-life balans kroz fleksibilnije radne aranžmane</li>
                        <li>Kreirati individualizovane karijerne putanje za ključne talente</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Akcioni plan za zadržavanje</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="task1" />
                          <label htmlFor="task1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Sprovesti anketu o zadovoljstvu zaposlenih
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="task2" />
                          <label htmlFor="task2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Organizovati radionice za razvoj liderskih veština
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="task3" />
                          <label htmlFor="task3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Implementirati sistem za prepoznavanje i nagrađivanje izuzetnih performansi
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="task4" />
                          <label htmlFor="task4" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Razviti program rotacije poslova za visoko potencijalne zaposlene
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analitika">
            <Card>
              <CardHeader>
                <CardTitle>Analitika talenata</CardTitle>
                <CardDescription>Napredne analitike za predviđanje performansi i potencijala</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Predikcija performansi</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={employees}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="performance" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Potencijal za napredovanje</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Zaposleni</TableHead>
                            <TableHead>Trenutna pozicija</TableHead>
                            <TableHead>Potencijalna pozicija</TableHead>
                            <TableHead>Verovatnoća napredovanja</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Ana Petrović</TableCell>
                            <TableCell>Senior Developer</TableCell>
                            <TableCell>Tech Lead</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Progress value={85} className="w-[60px] mr-2" />
                                <span>85%</span>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Marko Jovanović</TableCell>
                            <TableCell>Project Manager</TableCell>
                            <TableCell>Program Manager</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Progress value={70} className="w-[60px] mr-2" />
                                <span>70%</span>
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Preporuke za razvoj veština</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Zaposleni</TableHead>
                            <TableHead>Preporučene veštine</TableHead>
                            <TableHead>Predloženi resursi</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Ana Petrović</TableCell>
                            <TableCell>
                              <ul className="list-disc pl-5">
                                <li>Upravljanje timom</li>
                                <li>Arhitektura sistema</li>
                                <li>Agilne metodologije</li>
                              </ul>
                            </TableCell>
                            <TableCell>
                              <ul className="list-disc pl-5">
                                <li>Kurs liderstva</li>
                                <li>Konferencija o arhitekturi softvera</li>
                                <li>Scrum Master sertifikacija</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Marko Jovanović</TableCell>
                            <TableCell>
                              <ul className="list-disc pl-5">
                                <li>Strateško planiranje</li>
                                <li>Upravljanje portfoliom</li>
                                <li>Finansijsko modeliranje</li>
                              </ul>
                            </TableCell>
                            <TableCell>
                              <ul className="list-disc pl-5">
                                <li>MBA program</li>
                                <li>Radionica o upravljanju portfoliom</li>
                                <li>Kurs finansijskog modeliranja</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}