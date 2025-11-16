import { DollarSign, FileText, CheckCircle, TrendingUp, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PayrollCompliance() {
  const payrollData = [
    { id: 1, name: "John Smith", gross: 8500, deductions: 1275, net: 7225, status: "Processed" },
    { id: 2, name: "Sarah Johnson", gross: 9200, deductions: 1380, net: 7820, status: "Processed" },
    { id: 3, name: "Mike Davis", gross: 7800, deductions: 1170, net: 6630, status: "Pending" },
    { id: 4, name: "Emily Brown", gross: 8800, deductions: 1320, net: 7480, status: "Processed" },
  ];

  const complianceMetrics = {
    taxCompliance: 98,
    documentationComplete: 95,
    regulatoryAlignment: 97,
    overallScore: 97,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Payroll & Compliance Agent</h1>
          <p className="text-muted-foreground text-lg">
            Automated payroll processing with intelligent tax calculations
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="stat-card">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <DollarSign className="w-8 h-8 text-primary" />
                <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Total Payroll</p>
                <p className="text-3xl font-bold">$34,155</p>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-8 h-8 text-accent" />
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Employees</p>
                <p className="text-3xl font-bold">247</p>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <CheckCircle className="w-8 h-8 text-primary" />
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  {complianceMetrics.overallScore}%
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Compliance Score</p>
                <p className="text-3xl font-bold">{complianceMetrics.overallScore}%</p>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <FileText className="w-8 h-8 text-accent" />
                <span className="text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                  Ready
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Reports</p>
                <p className="text-3xl font-bold">12</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Compliance Dashboard */}
        <Card className="glass-card p-8 rounded-3xl">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Compliance Dashboard</h2>
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Tax Compliance</span>
                  <span className="text-sm font-bold text-primary">
                    {complianceMetrics.taxCompliance}%
                  </span>
                </div>
                <Progress value={complianceMetrics.taxCompliance} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Documentation</span>
                  <span className="text-sm font-bold text-primary">
                    {complianceMetrics.documentationComplete}%
                  </span>
                </div>
                <Progress value={complianceMetrics.documentationComplete} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Regulatory Alignment</span>
                  <span className="text-sm font-bold text-primary">
                    {complianceMetrics.regulatoryAlignment}%
                  </span>
                </div>
                <Progress value={complianceMetrics.regulatoryAlignment} className="h-2" />
              </div>
            </div>
          </div>
        </Card>

        {/* Payroll Table */}
        <Card className="glass-card rounded-3xl overflow-hidden">
          <div className="p-6 border-b border-border/50">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Current Payroll Cycle</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>November 2024</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead>Employee</TableHead>
                  <TableHead className="text-right">Gross Salary</TableHead>
                  <TableHead className="text-right">Deductions</TableHead>
                  <TableHead className="text-right">Net Salary</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payrollData.map((employee) => (
                  <TableRow key={employee.id} className="border-border/50">
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell className="text-right">${employee.gross.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-destructive">
                      ${employee.deductions.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      ${employee.net.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          employee.status === "Processed"
                            ? "bg-green-500/20 text-green-600 dark:text-green-400"
                            : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="p-6 border-t border-border/50 bg-muted/30">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Showing 4 of 247 employees
              </span>
              <Button variant="outline">View All Employees</Button>
            </div>
          </div>
        </Card>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card p-6 rounded-3xl hover-lift">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Monthly Report</h3>
                  <p className="text-sm text-muted-foreground">Ready for download</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </Card>

          <Card className="glass-card p-6 rounded-3xl hover-lift">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Schedule Processing</h3>
                  <p className="text-sm text-muted-foreground">Next run: Dec 1, 2024</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Schedule
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
