import { useState } from "react";
import { Upload, FileText, CheckCircle, Clock, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export default function TalentAcquisition() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResults, setMatchResults] = useState<any>(null);
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsAnalyzing(true);
      
      // Simulate AI analysis
      setTimeout(() => {
        setMatchResults({
          matchScore: 87,
          topSkills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
          missingSkills: ["Kubernetes", "AWS Lambda"],
          experience: "5+ years",
          recommendation: "Highly Recommended",
        });
        setIsAnalyzing(false);
        toast({
          title: "Analysis Complete",
          description: "Resume successfully matched with job requirements.",
        });
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Talent Acquisition Agent</h1>
          <p className="text-muted-foreground text-lg">AI-powered resume screening and candidate matching</p>
        </div>

        {/* Upload Section */}
        <Card className="glass-card p-8 rounded-3xl">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Upload className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Upload Resume</h2>
            </div>
            
            <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary transition-colors cursor-pointer">
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer space-y-4 block">
                <FileText className="w-16 h-16 mx-auto text-muted-foreground" />
                <div>
                  <p className="text-lg font-medium">Drop your resume here or click to browse</p>
                  <p className="text-sm text-muted-foreground">Supports PDF and DOCX files</p>
                </div>
              </label>
            </div>

            {uploadedFile && (
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
                <FileText className="w-5 h-5 text-primary" />
                <span className="font-medium">{uploadedFile.name}</span>
                <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
              </div>
            )}
          </div>
        </Card>

        {/* Analysis Results */}
        {isAnalyzing && (
          <Card className="glass-card p-8 rounded-3xl animate-slide-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary animate-spin" />
                <h2 className="text-2xl font-semibold">Analyzing Resume...</h2>
              </div>
              <Progress value={60} className="h-2" />
              <p className="text-muted-foreground">AI is processing candidate information and matching skills...</p>
            </div>
          </Card>
        )}

        {matchResults && !isAnalyzing && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in">
            {/* Match Score */}
            <Card className="glass-card p-8 rounded-3xl hover-lift">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Match Score</h3>
                </div>
                <div className="text-center py-6">
                  <div className="text-6xl font-bold gradient-text">{matchResults.matchScore}%</div>
                  <p className="text-muted-foreground mt-2">Job Compatibility</p>
                  <div className="mt-4">
                    <span className="inline-block px-4 py-2 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full font-medium">
                      {matchResults.recommendation}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Candidate Info */}
            <Card className="glass-card p-8 rounded-3xl hover-lift">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Candidate Profile</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-semibold">{matchResults.experience}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">Skills Matched</span>
                    <span className="font-semibold">{matchResults.topSkills.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-xl">
                    <span className="text-muted-foreground">Skills Gap</span>
                    <span className="font-semibold">{matchResults.missingSkills.length}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Top Skills */}
            <Card className="glass-card p-8 rounded-3xl hover-lift">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Top Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {matchResults.topSkills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/20 text-primary rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Missing Skills */}
            <Card className="glass-card p-8 rounded-3xl hover-lift">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Skills to Develop</h3>
                <div className="flex flex-wrap gap-2">
                  {matchResults.missingSkills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-accent/20 text-accent rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Schedule Interview */}
        {matchResults && (
          <Card className="glass-card p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-semibold mb-4">Next Steps</h3>
            <p className="text-muted-foreground mb-6">Candidate shows strong potential for the position</p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Schedule Interview
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
