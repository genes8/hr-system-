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
import { Calendar } from "@/components/ui/calendar"
import { AlertCircle, Award, BarChart as BarChartIcon, BookOpen, Clock, DollarSign, FileText, PlusCircle, RefreshCw, Search, TrendingUp, Users } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const yearlyExpenses = [
  { year: '2020', amount: 150000 },
  { year: '2021', amount: 180000 },
  { year: '2022', amount: 210000 },
  { year: '2023', amount: 240000 },
];

const certificateTypeExpenses = [
  { name: 'Rukovanje VN opremom', value: 54000 },
  { name: 'Zaštita na radu', value: 60000 },
  { name: 'Upravljanje distributivnim sistemom', value: 60000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function PracenjeSertifikata() {
const [activeTab, setActiveTab] = useState('pregled')

const certificates = [
  { id: 1, name: "Rukovanje visokonaponskom opremom", employee: "Marko Petrović", acquired: "2022-05-15", expires: "2024-05-15", status: "Aktivan" },
  { id: 2, name: "Zaštita na radu", employee: "Ana Jovanović", acquired: "2021-11-20", expires: "2023-11-20", status: "Ističe uskoro" },
  { id: 3, name: "Upravljanje distributivnim sistemom", employee: "Nikola Đorđević", acquired: "2023-01-10", expires: "2025-01-10", status: "Aktivan" },
  { id: 4, name: "Održavanje transformatorskih stanica", employee: "Jelena Nikolić", acquired: "2022-08-05", expires: "2023-08-05", status: "Istekao" },
]

return (
  <div className="flex flex-col min-h-screen">
    <div className="bg-blue-900 text-white p-4">
      <h1 className="text-3xl font-bold">Praćenje Sertifikata</h1>
      <p className="mt-2">Upravljanje i praćenje sertifikata zaposlenih u elektrodistribuciji</p>
    </div>
    
    <div className="flex-grow p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="flex justify-start overflow-x-auto pb-2">
          <TabsTrigger value="pregled" className="px-4 py-2">
            <Award className="mr-2 h-4 w-4" />
            Pregled sertifikata
          </TabsTrigger>
          <TabsTrigger value="obnavljanje" className="px-4 py-2">
            <RefreshCw className="mr-2 h-4 w-4" />
            Obnavljanje
          </TabsTrigger>
          <TabsTrigger value="izvestaji" className="px-4 py-2">
            <FileText className="mr-2 h-4 w-4" />
            Izveštaji
          </TabsTrigger>
          <TabsTrigger value="troskovi" className="px-4 py-2">
            <DollarSign className="mr-2 h-4 w-4" />
            Troškovi
          </TabsTrigger>
          <TabsTrigger value="planiranje" className="px-4 py-2">
            <TrendingUp className="mr-2 h-4 w-4" />
            Planiranje
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pregled">
          <Card>
            <CardHeader>
              <CardTitle>Pregled sertifikata</CardTitle>
              <CardDescription>Centralni registar svih sertifikata zaposlenih</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Input className="max-w-sm" placeholder="Pretraži sertifikate..." />
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Dodaj novi sertifikat
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Naziv sertifikata</TableHead>
                    <TableHead>Zaposleni</TableHead>
                    <TableHead>Datum sticanja</TableHead>
                    <TableHead>Datum isteka</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Akcije</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {certificates.map((cert) => (
                    <TableRow key={cert.id}>
                      <TableCell className="font-medium">{cert.name}</TableCell>
                      <TableCell>{cert.employee}</TableCell>
                      <TableCell>{cert.acquired}</TableCell>
                      <TableCell>{cert.expires}</TableCell>
                      <TableCell>
                        <Badge variant={cert.status === "Aktivan" ? "default" : cert.status === "Ističe uskoro" ? "secondary" : "destructive"}>
                          {cert.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Detalji</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="obnavljanje">
          <Card>
            <CardHeader>
              <CardTitle>Obnavljanje sertifikata</CardTitle>
              <CardDescription>Upravljanje procesom obnavljanja sertifikata</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Sertifikati koji ističu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Zaštita na radu - Ana Jovanović</span>
                        <Badge variant="secondary">Ističe za 30 dana</Badge>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Održavanje transformatorskih stanica - Jelena Nikolić</span>
                        <Badge variant="destructive">Istekao</Badge>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Pokreni obnavljanje</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Povezani kursevi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between items-center">
                        <span>Napredna zaštita na radu</span>
                        <Badge variant="secondary">LMS kurs</Badge>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Održavanje VN opreme</span>
                        <Badge variant="secondary">LMS kurs</Badge>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Prijavi se na kurs</Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="izvestaji">
          <Card>
            <CardHeader>
              <CardTitle>Izveštaji o sertifikatima</CardTitle>
              <CardDescription>Analiza statusa sertifikata na nivou organizacije</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Ukupno aktivnih sertifikata</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">284</div>
                    <p className="text-xs text-muted-foreground">+7% u odnosu na prošli kvartal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sertifikati koji ističu u narednih 30 dana</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23</div>
                    <Progress value={23} max={284} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Stopa obnavljanja</CardTitle>
                    <RefreshCw className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92%</div>
                    <p className="text-xs text-muted-foreground">+3% u odnosu na prošlu godinu</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Prosečno vreme do isteka</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">267 dana</div>
                    <p className="text-xs text-muted-foreground">-5 dana u odnosu na prošli mesec</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Distribucija sertifikata po odeljenjima</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Odeljenje</TableHead>
                      <TableHead>Ukupno sertifikata</TableHead>
                      <TableHead>Aktivni</TableHead>
                      <TableHead>Ističu uskoro</TableHead>
                      <TableHead>Istekli</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Održavanje</TableCell>
                      <TableCell>87</TableCell>
                      <TableCell>76</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Distribucija</TableCell>
                      <TableCell>65</TableCell>
                      <TableCell>59</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tehnička podrška</TableCell>
                      <TableCell>52</TableCell>
                      <TableCell>48</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>0</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="troskovi">
          <Card>
            <CardHeader>
              <CardTitle>Troškovi sertifikacije</CardTitle>
              <CardDescription>Praćenje i analiza troškova vezanih za sertifikate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ukupni troškovi po godinama</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <BarChart width={400} height={300} data={yearlyExpenses}>
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#8884d8" />
                      </BarChart>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Troškovi po tipu sertifikata</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <PieChart width={400} height={300}>
                        <Pie
                          data={certificateTypeExpenses}
                          cx={200}
                          cy={150}
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {certificateTypeExpenses.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tip sertifikata</TableHead>
                    <TableHead>Broj sertifikata</TableHead>
                    <TableHead>Prosečan trošak</TableHead>
                    <TableHead>Ukupan trošak</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Rukovanje VN opremom</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>1,200 €</TableCell>
                    <TableCell>54,000 €</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Zaštita na radu</TableCell>
                    <TableCell>120</TableCell>
                    <TableCell>500 €</TableCell>
                    <TableCell>60,000 €</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Upravljanje distributivnim sistemom</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>2,000 €</TableCell>
                    <TableCell>60,000 €</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planiranje">
          <Card>
            <CardHeader>
              <CardTitle>Planiranje sertifikacija</CardTitle>
              <CardDescription>Alati za planiranje budžeta i benchmark analizu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Planirani budžet za narednu godinu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Ukupan planirani budžet:</span>
                        <span className="font-bold">250,000 €</span>
                      </div>
                      <Progress value={65} max={100} className="w-full" />
                      <p className="text-sm text-muted-foreground">65% budžeta je već alocirano za predstojeće sertifikacije</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Benchmark analiza</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Stopa sertifikacije u industriji:</span>
                        <span className="font-bold">78%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Naša stopa sertifikacije:</span>
                        <span className="font-bold">82%</span>
                      </div>
                      <Progress value={82} max={100} className="w-full" />
                      <p className="text-sm text-muted-foreground">Naša kompanija je iznad proseka industrije za 4%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Planirane sertifikacije za naredni period</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tip sertifikata</TableHead>
                      <TableHead>Planirani broj</TableHead>
                      <TableHead>Procenjeni trošak</TableHead>
                      <TableHead>Prioritet</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Napredne tehnologije u distribuciji</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>75,000 €</TableCell>
                      <TableCell>
                        <Badge variant="default">Visok</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Upravljanje pametnim mrežama</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>45,000 €</TableCell>
                      <TableCell>
                        <Badge variant="default">Srednji</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Obnovljivi izvori energije</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>30,000 €</TableCell>
                      <TableCell>
                        <Badge variant="default">Nizak</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
)
}