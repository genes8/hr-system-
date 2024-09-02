"use client";

import { useState } from 'react'
import { Search, Plus, Edit, Trash2, ChevronDown, User, Map, History, FileText, BarChart, RefreshCw, FileBarChart } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// Dodajte nove importe ovde:
import HistoryView from './CompetencyHistory'
import MappingView from './CompetencyMapping'
import EmployeeProfilesView from './EmployeeProfiles'
import GapAnalysisView from './GapAnalysis'
import ReportsView from './Reports'
import SkillSearchView from './SkillSearch'

const competencies = [
  { name: "Liderstvo", category: "Menadžment", level: "Napredni" },
  { name: "Komunikacija", category: "Meke veštine", level: "Srednji" },
  { name: "Python", category: "Programiranje", level: "Početni" },
]

export default function CompetencyDatabase() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Baza kompetencija</h1>
      </div>
      
      <div className="flex-grow p-6">
        <Tabs defaultValue="competencies" className="space-y-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <TabsTrigger value="competencies">Kompetencije</TabsTrigger>
            <TabsTrigger value="employee-profiles">Profili zaposlenih</TabsTrigger>
            <TabsTrigger value="mapping">Mapiranje</TabsTrigger>
            <TabsTrigger value="skill-search">Pretraga veština</TabsTrigger>
            <TabsTrigger value="history">Istorija razvoja</TabsTrigger>
            <TabsTrigger value="gap-analysis">Gap analiza</TabsTrigger>
            <TabsTrigger value="reports">Izveštaji</TabsTrigger>
          </TabsList>
          
          <TabsContent value="competencies">
            <Card>
              <CardHeader>
                <CardTitle>Lista kompetencija</CardTitle>
                <CardDescription>Pregled i upravljanje kompetencijama u Elektroprivredi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Pretraži kompetencije" className="pl-8" />
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Dodaj novu kompetenciju
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Naziv</TableHead>
                        <TableHead>Kategorija</TableHead>
                        <TableHead>Nivo</TableHead>
                        <TableHead className="text-right">Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {competencies.map((comp) => (
                        <TableRow key={comp.name}>
                          <TableCell>{comp.name}</TableCell>
                          <TableCell>{comp.category}</TableCell>
                          <TableCell>{comp.level}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <span className="sr-only">Otvori meni</span>
                                  <ChevronDown className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  <span>Izmeni</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  <span>Obriši</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="employee-profiles">
            <EmployeeProfilesView />
          </TabsContent>
          <TabsContent value="mapping">
            <MappingView />
          </TabsContent>
          <TabsContent value="skill-search">
            <SkillSearchView />
          </TabsContent>
          <TabsContent value="history">
            <HistoryView />
          </TabsContent>
          <TabsContent value="gap-analysis">
            <GapAnalysisView />
          </TabsContent>
          <TabsContent value="reports">
            <ReportsView />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}